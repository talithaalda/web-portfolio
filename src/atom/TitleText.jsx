// eslint-disable-next-line react/prop-types
const TitleTextComponents = ({ textTitle }) => {
  return (
    <div className="flex flex-col text-center">
      <h1 className="sm:text-4xl text-3xl font-neometricBold text-white">
        {textTitle}
      </h1>
      <div className=""></div>
    </div>
  );
};

export default TitleTextComponents;
