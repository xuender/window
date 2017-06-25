package window

import (
	"os"
	"testing"

	. "github.com/smartystreets/goconvey/convey"
)

func TestUser(t *testing.T) {
	Convey("User", t, func() {
		os.RemoveAll("./tmp.db")
		w := New("tmp")
		defer w.Close()
		Convey("userCount", func() {
			So(userCount(w.db), ShouldEqual, 1)
		})
		Convey("userLoad", func() {
			u := &User{
				Num: 1,
			}
			u.Load(w.db)
			So(u.Name, ShouldEqual, "admin")
		})
		Convey("userLoadPhone", func() {
			u := &User{
				Phone: "11111111111",
			}
			u.Load(w.db)
			So(u.Name, ShouldEqual, "admin")
		})
	})
}
