package window

import (
	"fmt"
	"log"
	"time"

	"github.com/syndtr/goleveldb/leveldb"
	"github.com/xuender/door"
	"github.com/xuender/goutils"
)

// Window 用户界面.
type Window struct {
	userMap goutils.ChMap
	db      *leveldb.DB
}

// Close 关闭.
func (w *Window) Close() {
	w.userMap.Close()
	w.db.Close()
}

// Open 打开Window.
func (w *Window) Open(c door.Context) error {
	log.Printf("连接: %d\n", c.Num())
	c.Revert(&SysInfo{
		ServerVersion: "1.0.0",
		UserNum:       c.Num(),
		TimeStamp:     time.Now().UnixNano(),
	}, door.MethodEnum_OPEN, "window")
	return nil
}

// Login 登录.
func (w *Window) Login(c door.Context) error {
	l := &Login{}
	c.Unmarshal(l)
	user := &User{
		Num:   l.UserNum,
		Phone: l.Phone,
	}
	log.Printf("登录: %v\n", l)
	user.Load(w.db)
	if user.CheckPassword(l.Password, c.Num()) {
		w.userMap.Put(c.Num(), user)
		c.PutAttribute("isLogin", true)
		user.SetPassword("")
		log.Printf("登录成功: %s\n", user.Name)
		c.Revert(user, door.MethodEnum_PUT, "window", "login")
	} else {
		if l.UserNum > 0 {
			log.Printf("免密码登录失败: %d\n", l.UserNum)
			c.Revert(&Page{
				Page: "login",
				Msg:  &Msg{Type: MsgEnum_WARN, Text: "密码被修改，请重新登录"},
			}, door.MethodEnum_PUT, "window", "page")
		} else {
			log.Printf("密码登录失败: %s\n", l.Phone)
			c.Revert(&Msg{Type: MsgEnum_WARN, Text: "用户密码错误."}, door.MethodEnum_POST, "window", "msg")
		}
	}
	return nil
}

// Logout 登出.
func (w *Window) Logout(c door.Context) error {
	c.PutAttribute("isLogin", false)
	c.Revert(&Page{
		Page: "login",
	}, door.MethodEnum_PUT, "window", "page")
	if l, ok := w.userMap.Get(c.Num()); ok {
		log.Printf("登出: %s\n", l.(*User).Name)
		w.userMap.Remove(c.Num())
	}
	return nil
}

// Init 初始化.
func (w *Window) Init() {
	if userCount(w.db) == 0 {
		createAdmin(w.db)
	}
}

// Register 用户注册.
func (w *Window) Register(c door.Context) error {
	u := &User{}
	c.Unmarshal(u)
	// TODO 验证手机号
	log.Printf("注册 %v\n", u)
	u.Num = newNum(w.db)
	u.Save(w.db)
	c.Revert(u, door.MethodEnum_PUT, "window", "login")
	return nil
}

// New 新建 Window.
func New(name string) (w *Window) {
	db, _ := leveldb.OpenFile(fmt.Sprintf("./%s.db", name), nil)
	w = &Window{
		userMap: goutils.NewChMap(),
		db:      db,
	}
	w.Init()
	return
}
