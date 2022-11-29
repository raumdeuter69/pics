import axios from "axios";
const searchImages= ()=>
{

}

export default axios.create({
    baseURL:'https://api.unsplash.com'
    ,headers:{
        Authorization: 'Client-ID MZiTV3Et6jmiR2qrN_Abd1BqsNJlHuxS7cDuSgB7EPY'
      }

})