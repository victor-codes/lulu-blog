const path = require("path");
const fs = require("fs");
const matter = require("gray-matter");

const dirPath = path.join(__dirname, "../../posts");
let postlist = [];

const months = {
  "01": "January",
  "02": "February",
  "03": "March",
  "04": "April",
  "05": "May",
  "06": "June",
  "07": "July",
  "08": "August",
  "09": "September",
  10: "October",
  11: "November",
  12: "December",
};

const formatDate = (date) => {
  const datetimeArray = date.toString().split("T");
  const dateArray = datetimeArray[0].split(" ");
  const timeArray = datetimeArray[1].split(":");

  const month = dateArray[1];
  const monthName = months[dateArray[1]];
  const day = dateArray[2];
  const year = dateArray[3];
  const time = `${timeArray[0]}:${timeArray[1]}`;

  return {
    month: month,
    monthName: monthName,
    day: day,
    year: year,
    time: time,
  };
};

const getPosts = () => {
  fs.readdir(dirPath, (err, files) => {
    if (err) {
      return console.log("Failed to list contents of directory: " + err);
    }

    let ilist = [];

    files.forEach((file, i) => {
      let post;

      fs.readFile(`${dirPath}/${file}`, "utf8", (err, contents) => {
        const output = matter(contents);

        let metadata = output.data;

        let content = output.content;
        let dateString = output.data.date;

        const parsedDate = dateString ? formatDate(dateString) : new Date();

        const publishedDate = `${parsedDate["month"]} ${parsedDate["day"]}, ${parsedDate["year"]}`;

        const datestring = `${parsedDate["year"]}-${parsedDate["month"]}-${parsedDate["day"]}T${parsedDate["time"]}:00`;

        const date = new Date(dateString);

        const timestamp = Math.floor(date.getTime() / 1000);

        post = {
          id: timestamp,
          title: metadata.title ? metadata.title : "No title given",
          time1: datestring,
          author: "Lulu Nwenyi",
          publishDate: publishedDate ? publishedDate : "No date given",
          time: parsedDate["time"],
          thumbnail: metadata.thumbnail,
          category: metadata.category,
          content: content ? content : "No content given",
          slug: metadata.slug ? metadata.slug : "404",
          tags: metadata.tags ? metadata.tags : null,
          description: metadata.description,
        };

        postlist.push(post);

        ilist.push(i);
        if (ilist.length === files.length) {
          const sortedList = postlist.sort((a, b) => {
            return a.id < b.id ? 1 : -1;
          });

          let data = JSON.stringify(sortedList);

          fs.writeFileSync("src/data/posts.json", data);
        }
      });
    });
  });
  return;
};

getPosts();
