
//*<----------------- querySelectors ----------------->*//
let storyDiv = document.querySelector('#news-stories');



//*<----------------- fetch request ----------------->*//
let hnAPIrequest = async () => {
  let response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty');

  let data = await response.json();
  console.log(data[1]);


//-----------------------------------------------------------

for (let i = 0; i < 100; i++){
      fetch(encodeURI(`https://hacker-news.firebaseio.com/v0/item/${data[i]}.json?print=pretty`))
          .then(response => {
            return response.json()
          })

            .then(data2 => {
              console.log(data2);
              console.log("Random Text is working");

                // create the div elements for the parent and child
              let parent = document.createElement('div');
              parent.className = 'parent';
              let child = document.createElement('div');
              child.className = 'child';
              
              //url creation and link
              let dataUrl = document.createElement('a');
                dataUrl.className = 'dataUrl';
              let dataUrlText = document.createTextNode(data2.title);

            //---------------------------------------------------------------
              let commentUrl = document.createElement('a');
                commentUrl.className = 'comments'
              let commentUrlText = document.createTextNode(data2.descendants)

              let commentID = data2.id;
              // let score = `score: ${data2.score}`

            // //convert Unix Time to Javascript time
            //   let unixTime = data2.time;
            //   let newJSTime = unixTime / 1000;
            //   let localTime = newJSTime.toLocalString("en-US")

            commentUrl.appendChild(commentUrlText);
            commentUrl.title = data2.descendants;
            commentUrl.href = `https://news.ycombinator.com/item?id=${commentID}`
            commentUrl.setAttribute('target', '_blank')




              // add link to parent div
              dataUrl.appendChild(dataUrlText);
              dataUrl.title = data2.title;
              dataUrl.href = data2.url;

              
              parent.appendChild(dataUrl); // insert dataUrl information into parent div
              parent.appendChild(child); //insert the child div into the parent div
              storyDiv.appendChild(parent); //show the parent div inside the storyDiv
              storyDiv.appendChild(child); //show the child div inside the storyDiv
              
                    console.log(storyDiv);
                    console.log("The appending is working");

              //display the title and url            
             // parent.innerText += `${data2.title} ---  ${data2.url}` 
              //urlChild.innerText += ` ${link}`                    
            child.innerText += ` ${data2.score} points -  ${data2.time} seconds ago by: ${data2.by} - comments: `
            
            child.appendChild(commentUrl);
            })
          }
        };
hnAPIrequest();
