//your JS code here. If required.
function promiseFnc() {
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			const data=[1,2,3,4]
			resolve(data);
		},3000)
	})
}

function filterFnc(data) {
	
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			data=data.filter((item)=>item%2==0);
			document.getElementById('output').innerHTML+=`${data.join(' ')}`;
			resolve(data);
		},1000)
	})
}
function multiplyFnc(data) {
	
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			data.forEach((item,i)=>data[i]=item*2);
			document.getElementById('output').innerHTML+=` ${data.join(' ')}`;
			resolve(data);
		},2000)
	})
}
promiseFnc()
	.then((data)=>filterFnc(data))
	.then((data)=>multiplyFnc(data))


























