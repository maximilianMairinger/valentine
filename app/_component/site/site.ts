import Component from "../component"
import declareComponent from "../../lib/declareComponent"
import PageManager from "./../_themeAble/_frame/_manager/pageManager/pageManager"
import lang from "../../lib/lang"
import LowerNav from "../_themeAble/lowerNav/lowerNav"
import Header from "../_themeAble/header/header"
import { dirString } from "../../lib/domain"
import { ElementList } from "extended-dom"
import HighlightAbleIcon from "../_themeAble/_icon/_highlightAbleIcon/highlightAbleIcon"
import { Data, DataSubscription } from "josm"
import { linkRecord } from "../_themeAble/link/link"
import { BodyTypes } from "./pugBody.gen"; import "./pugBody.gen"

export default class Site extends Component {
  protected body: BodyTypes

  constructor() {
    super()
    
    this.body.yes.click(() => {
      this.body.imgWrap.css("display", "flex")
      window.history.pushState({}, "", "/")
      this.body.yes.style.fontSize = ""
      window.addEventListener("popstate", () => {
        this.body.imgWrap.css("display", "none")
      }, {once: true})
    })

    this.body.no.click(() => {
      this.body.yes.css({
        fontSize: this.body.yes.css("fontSize") * 1.10 + 5
      })
    })
    

  }

  stl() {
    return super.stl() + require("./site.css").toString()
  }
  pug() {
    return require("./site.pug").default
  }
}

declareComponent("site", Site)
