const findPalindrome = () => { 
    const text = document.getElementById("text").value.split("\n");
    const ul = document.createElement("ul");
    const result = document.querySelector(".result")
    result.innerHTML=""
    ul.classList.add("palindrome")
    let count = 0;
    console.log(text)
    text.forEach(line => {
        const words = line.split(" ");
        words.forEach(word => {
            let i=0;
            let n=word.length -1;
            if(n >= 0){
                while(i<=n){
                    if(word[i]==' ' || word[n]==' ')
                        break;
                    if(word[i]!=word[n])
                        break;
                    i++;
                    n--;
                }
                if(i>=n){
                    const li = document.createElement("li");
                    const data = document.createTextNode(word);
                    li.classList.add("list");
                    li.appendChild(data);
                    ul.appendChild(li)
                    count++;
                }
            }
        })
    })

    if(count>0){
        const h1 = document.createElement("h1");
        const data = document.createTextNode(`Number of Palindrome : ${count}`);
        h1.appendChild(data)
        result.appendChild(h1)
        result.appendChild(ul)
    }
}