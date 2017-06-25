package main

import (
	"errors"
	"log"
	"net/http"

	"./window"
	"github.com/labstack/echo"
	"github.com/xuender/door"
)

func main() {
	log.Println("启动")
	w := window.New("window")
	defer w.Close()
	d := door.New()
	d.OPEN(w.Open, "window")
	d.POST(w.Login, "window", "login")
	d.DELETE(w.Logout, "window", "login")
	d.POST(w.Register, "window", "register")
	d.AddFilter(&door.Inline{Handler: func(c *door.Context) error {
		isLogin := c.GetAttribute("isLogin")
		if isLogin != nil && isLogin.(bool) {
			return c.Next()
		}
		return errors.New("未登录的用户不能工作")
	}}, "work")

	e := echo.New()
	e.GET("/", func(c echo.Context) error {
		return c.String(http.StatusOK, "Hello, World!")
	})
	e.GET("/ws", func(c echo.Context) error {
		return d.WebsocketHandler(c.Response().Writer, c.Request())
	})
	e.Static("/static", "static")
	e.Logger.Fatal(e.Start(":8888"))
	log.Println("退出")
}
