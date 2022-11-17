
//*<----------------- querySelectors ----------------->*//
let storyDiv = document.querySelector('#news-stories');



//*<----------------- fetch request ----------------->*//
let hnAPIrequest = async () => {
  let response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty');

  let data = await response.json();
  console.log(data[1]);


//-----------------------------------------------------------

for (let i = 0; i < 100; i++){
      fetch(`https://hacker-news.firebaseio.com/v0/item/${data[i]}.json?print=pretty`)
          .then(response => {
            return response.json()
          })

            .then(data2 => {
              console.log(data2);
              console.log("Random Text is working");

              let parent = document.createElement('div');
              parent.className = 'parent';
              let child = document.createElement('div');
              child.className = 'child';

                    parent.appendChild(child)
                    storyDiv.appendChild(parent);
                    storyDiv.appendChild(child);
                          
                    console.log(storyDiv);
                    console.log("The appending is working");

              //display the title and url            
              parent.innerText += `${data2.title}  /// (${data2.url})`                               
              child.innerText += ` score: ${data2.score} - descendents: ${data2.descendants}  - author: ${data2.by}`
            

                  //display other valuesv -- child div is not showing              
                  })
          }
        };
hnAPIrequest();
