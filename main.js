let myReq = new XMLHttpRequest();
myReq.open("GET", "test.json");
myReq.send();
console.log(myReq);
myReq.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    let mainData = JSON.parse(this.responseText);
    // Create Container To Hold All Divs And Gives Him className & Id
    let container = document.createElement("div");
    container.id = "data";
    container.className = "container";
    container.style.cssText = `display: flex; gap: 10px; flex-wrap: wrap;`;
    // container.style.cssText =
    for (let i = 0; i < mainData.length; i++) {
      // Create div To Each Article
      let div = document.createElement("div");
      div.className = "article";
      // Style div
      div.style.cssText = `background: #004766; padding: 5px 15px; margin: 10px auto
0px; color: #fff; font: bold 17px arial; width: 400px; border-radius: 10px`;
      // Create <p>..</p> To Hold Name Of Author
      let name = document.createElement("p");
      let nameText = document.createTextNode(`Name: ${mainData[i].name}`);
      name.appendChild(nameText);
      // Create <p>..</p> To Hold Name Of Title
      let title = document.createElement("p");
      let titleText = document.createTextNode(`Title: ${mainData[i].title}`);
      title.appendChild(titleText);
      // Create <p>..</p> To Hold Name Of Section
      let section = document.createElement("p");
      let sectionText = document.createTextNode(
        `Section: ${mainData[i].section}`
      );
      section.appendChild(sectionText);
      // Create <p>..</p> To Hold Name Of Content
      let content = document.createElement("p");
      let contentText = document.createTextNode(
        `Content: ${mainData[i].content}`
      );
      content.appendChild(contentText);
      // Append All <p>...</p> To their Divs
      div.appendChild(name);
      div.appendChild(title);
      div.appendChild(section);
      div.appendChild(content);
      // Append Div To Container
      container.appendChild(div);
      // Append Container To The Body
      document.body.appendChild(container);
    }
  }
};
