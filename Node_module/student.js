const getName = ()=>{
    return "Ahosan Kabir";
};

const getAge = () =>{
    return '25';
};

const cgpa = 3.20;

// exports.getName = getName;
// exports.getAge = getAge;
// exports.result = cgpa;


//another way 
module.exports = {
    getName,
    getAge,
    cgpa
};

//with es6:
// const _getName = getName;
// export { _getName as getName };
// const _getAge = getAge;
// export { _getAge as getAge };