
class Clock {

    constructor(timer) {
      this._timer = timer;
  
      this.$clockContainer = document.createElement("div");
      
      this.$timer = document.createElement("h2");
      this.$timer.innerHTML = this._timer;
        
      this.$startBtn = document.createElement("button");
      this.$startBtn.innerText = "Start";
  
      this.$pauseBtn = document.createElement("button");
      this.$pauseBtn.innerText = "Pause";
  
      this.$stopBtn = document.createElement("button");
      this.$stopBtn.innerText = "Stop";
      
    }
  
  
    render() {
      this.$clockContainer.appendChild(this.$timer);
      this.$clockContainer.appendChild(this.$startBtn);
      this.$clockContainer.appendChild(this.$pauseBtn);
      this.$clockContainer.appendChild(this.$stopBtn);
  
      return this.$clockContainer
    }
  }
//   let startBtn = document.getElementsByName("Start")

//   function myFunction() {
//       console.log("a")
//   }
//   document.addEventListener("click",myFunction)
  const rootEl = document.querySelector("#root");
  
  
  for (let i = 0; i <= 5; i++) {
    const clock = new Clock(i);
    rootEl.appendChild(clock.render());
  }