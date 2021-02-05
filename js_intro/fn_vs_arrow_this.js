const car = {
  maker: 'Ford',
  model: 'Fiesta',

  drive: () => {
    console.log(`Driving a ${this.maker} ${this.model} car!`)
  }
}

car.drive();


const car1 = {
  maker: 'Ford',
  model: 'Fiesta'
}

car1.drive = function() {
  console.log(`Driving a ${this.maker} ${this.model} car!`)
}

car1.drive()
car.drive.bind(car);
car.drive();

