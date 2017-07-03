package window

import (
	"crypto/md5"
	"encoding/base64"
	"encoding/binary"
	"fmt"
	"reflect"

	"github.com/syndtr/goleveldb/leveldb"
	"github.com/xuender/goutils"
)

var user_obj = []byte("U-")
var user_num = []byte("u-")

// Save 用户保存.
func (u *User) Save(db *leveldb.DB) {
	userKey := goutils.PrefixUint32(user_obj, u.Num)
	userBytes, _ := goutils.Encode(*u)
	db.Put(userKey, userBytes, nil)
	db.Put(goutils.PrefixBytes(user_num, []byte(u.Phone)), userKey, nil)
}

// Load 加载用户.
func (u *User) Load(db *leveldb.DB) {
	if u.Num > 0 {
		userKey := goutils.PrefixUint32(user_obj, u.Num)
		if bs, err := db.Get(userKey, nil); err == nil {
			goutils.Decode(bs, u)
		}
		return
	}
	if u.Phone != "" {
		if userKey, err := db.Get(goutils.PrefixBytes(user_num, []byte(u.Phone)), nil); err == nil {
			if bs, err := db.Get(userKey, nil); err == nil {
				goutils.Decode(bs, u)
			}
		}
	}
}

// CheckPassword 检查密码.
func (u *User) CheckPassword(password string, userNum uint32) bool {
	if decoded, err := base64.StdEncoding.DecodeString(password); err == nil {
		pb := base64.StdEncoding.EncodeToString(u.Password)
		md5Ctx := md5.New()
		md5Ctx.Write([]byte(fmt.Sprintf("%d-%s", userNum, pb)))
		return reflect.DeepEqual(decoded, md5Ctx.Sum(nil))
	}
	return false
}

// SetPassword 设置密码.
func (u *User) SetPassword(password string) {
	md5Ctx := md5.New()
	md5Ctx.Write([]byte(fmt.Sprintf("window-%s-door", password)))
	u.Password = md5Ctx.Sum(nil)
}

func userCount(db *leveldb.DB) (num uint32) {
	num = 0
	if countBytes, err := db.Get([]byte("UserCount"), nil); err == nil {
		num = binary.LittleEndian.Uint32(countBytes)
	}
	return
}

func newNum(db *leveldb.DB) (num uint32) {
	num = userCount(db) + 1
	numBytes := make([]byte, 4)
	binary.LittleEndian.PutUint32(numBytes, num)
	db.Put([]byte("UserCount"), numBytes, nil)
	return
}

func createAdmin(db *leveldb.DB) {
	user := User{
		Num:   newNum(db),
		Phone: "11111111111",
		Name:  "admin",
	}
	user.Password, _ = base64.StdEncoding.DecodeString("AiyM1C/+nRnucffmWGYHPg==")
	user.Save(db)
}
