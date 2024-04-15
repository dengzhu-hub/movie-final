import { noImagePlaceholder } from "../assets";
const getCroppedImageUrl = (url: string) => {
  // console.log("Input URL:", url); // 输出输入的 URL
  if (!url) return noImagePlaceholder;
  const target = "media/";
  const index = url.indexOf(target) + target.length;

  const croppedUrl = url.slice(0, index) + "crop/600/400/" + url.slice(index);

  // console.log("Cropped URL:", croppedUrl);
  return croppedUrl;
};
export default getCroppedImageUrl;
