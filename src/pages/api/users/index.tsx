import { NextApiRequest, NextApiResponse } from "next";

export default (request: NextApiRequest, response: NextApiResponse) => {
  console.log(request.query);

  const users = [
    {
      id: 1,
      name: "Kevin Ibrahin",
      image: "/images/bloco_image_1.svg",
      text: "QQQQQQQQQQQQQQQQuick-start guide to nuts and seeds",
      avatar: "https://unsplash.com/photos/C8Ta0gwPbQg"
    },
    {
      id: 1,
      name: "Mike Jackson",
      image: "/images/bloco_image_2.svg",
      text: "Nutrition: Tips for Improving Your Healthy",
      avatar: "https://unsplash.com/photos/C8Ta0gwPbQg"
    },
    {
      id: 1,
      name: "Bryan McGregor",
      image: "/images/bloco_image_3.svg",
      text: "The top 10 benefits of eating healthy",
      avatar: "https://unsplash.com/photos/C8Ta0gwPbQg"
    },
    {
      id: 1,
      name: "Bob Dylan",
      image: "/images/bloco_image_4.svg",
      text: "Why did eating well made you live longer?",
      avatar: "https://unsplash.com/photos/C8Ta0gwPbQg"
    },
  ];
  return response.json(users);
};
