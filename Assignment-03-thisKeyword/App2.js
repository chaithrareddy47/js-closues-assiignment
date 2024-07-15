const userObj = {
    name: 'js',
    age: 30,
    framework: "React js",
    childObj: {
        newname: 'reactjs',
        getDeatils() {
           return  console.log(`${this.newname} and ${this.name}` );
        }
    }
}

userObj.childObj.getDeatils()