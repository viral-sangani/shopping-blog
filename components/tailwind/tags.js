export default function Tags({ tagName }) {
  const badgeList = [
    `text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-red-600 bg-red-200 uppercase last:mr-0 mr-1`,
    `text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-orange-600 bg-orange-200 uppercase last:mr-0 mr-1`,
    `text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200 uppercase last:mr-0 mr-1`,
    `text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200 uppercase last:mr-0 mr-1`,
    `text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-purple-600 bg-purple-200 uppercase last:mr-0 mr-1`,
    `text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 uppercase last:mr-0 mr-1`,
  ];
  return (
    <span className={`${badgeList[Math.floor(Math.random() * 5)]}`}>
      {tagName}
    </span>
  );
}
