import Icon from "../icon";
import declareComponent from "../../../lib/declareComponent";
import { BodyTypes } from "./pugBody.gen"; import "./pugBody.gen"

export default class WillYouBeMyValentineTingIcon extends Icon {
  public body: BodyTypes
  pug() {
    return require("./willYouBeMyValentineTingIcon.pug").default
  }
  stl() {
    return super.stl() + require("./willYouBeMyValentineTingIcon.css").toString()
  }
}

declareComponent("c-will-you-be-my-valentine-ting-icon", WillYouBeMyValentineTingIcon)
