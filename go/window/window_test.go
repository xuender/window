package window

import (
	"os"
	"testing"

	. "github.com/smartystreets/goconvey/convey"
)

func TestWindow(t *testing.T) {
	Convey("Window", t, func() {
		os.RemoveAll("./tmp.db")
		// w := New("tmp")
		Convey("Init", func() {
		})
	})
}
