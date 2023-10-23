let testArr = ['A','A','A','B','C'];

function calculateGPA(arr){
    let sum = 0;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 'A'){
            sum += 100;
        }else if(arr[i] === 'B'){
            sum += 80;
        }else if(arr[i] === 'C'){
            sum += 70;
        }else{
            return false;
        }
    }

    let avg = sum / arr.length;
    let gpa = '';

    if(avg === 100){
        gpa = 'A';
    }else if(avg >= 80 && avg < 100 ){
        gpa = 'B';
    }else if(avg >= 70 && gpa < 80){
        gpa = 'C';
    }else{
        gpa = 'F';
    }

    return gpa;
}

console.log(`Your GPA is ${calculateGPA(testArr)}`);