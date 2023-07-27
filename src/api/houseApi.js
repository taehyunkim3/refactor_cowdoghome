
import axios from "axios";
const baseUrl = process.env.REACT_APP_SERVER_API_URL;

export const getItems = async () => { // 버블에서 목록 조회
    try {
        const { data } = await axios.get(`${baseUrl}/itempage`);
        console.log(data);
        return data;
    } catch (e) {
        alert(e.response.data.msg);
    }
}

export const getHouseDetail = async (id) => { // 상세페이지 조회
    try {
        const { data } = await axios.get(`${baseUrl}/detail/${id}`);
        return data;
    } catch (e) {
        throw new Error(e.response.data.msg);
    }
}


export const postHousePost = async (post) => { // 사진전송 및 게시
    try {
        const token = localStorage.getItem("token");
        console.log('🐹게시요청');

        console.log("postDesk" + JSON.stringify(post));
        const profileExt = post.imgUrl.name.split('.').pop();


        const formImageData = new FormData();
        formImageData.append('image', post.imgUrl, `image.${profileExt}`)

        const imageData = await axios({
            method: "post",
            url: `${baseUrl}/detail/image`,
            data: formImageData,
            // withCredentials: true,
            // headers: { "Authorization": `Bearer ${token}` }
        });

        console.log(JSON.stringify(imageData) + "🏠")
        const dataWithUrl = { ...post, imgUrl: imageData.data.url }
        const formedToken = { headers: { "Cowdog": `Bearer ${token}` } };
        const { data } = await axios.post(`${baseUrl}/detail`, dataWithUrl, formedToken);
        return data;
    } catch (e) {
        alert(e.response.data.msg);
    }
}
