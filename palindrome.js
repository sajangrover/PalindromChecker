const findPalindrome = () => { 
    const text = document.getElementById("text").value.split(" ");
    const ul = document.getElementById("palindroms");
    ul.innerHTML=""
    text.forEach(word => {
        let i=0;
        let n=word.length -1;
        while(i<=n){
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
        }
    })
}