import dispatcher from "../dispatcher";
import {EventEmitter} from "events";

class UserStore extends EventEmitter {
  constructor() {
    super();
    dispatcher.register(this.handleAction.bind(this));
    this.userLoggedIn = false;  
  }

  handleAction(action) {
    switch(action.type) {
      case "LOGGED_IN":
        this.userLoggedIn = true;
        this.emit("change");     
      break;
      case "LOGGED_OUT":
        this.userLoggedIn = false;
        this.emit("change");     
    }
  }

  isUserLoggedIn() {
    return this.userLoggedIn;
  }
}

const userStore = new UserStore();
export default userStore;