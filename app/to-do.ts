class Task {
  done: boolean = false;

  constructor(public description: string, public priority: string){}

  markDone(){
    this.done = true;
  }
}

var tasks: Task[] = [];
tasks.push(new Task('Do the dishes.', 'Medium'));
tasks.push(new Task('Buy chocolate.', 'Low'));
tasks.push(new Task('Do laundry.', 'High'));

tasks[0].markDone();

//markDone on index 1 overwrites markDone on index 0 (index 1 done value becomes true and index 0 done value becomes false)
//tasks[0, 1].markDone();

//markDone on indexes 0 and 1 become true
//tasks[0].markDone();
//tasks[1].markDone();




for(var task of tasks){
  console.log(task);
}
