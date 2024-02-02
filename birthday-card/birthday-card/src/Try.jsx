import * as React from "react";

function MyComponent(props) {
  return (
    <>
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4aa59005d04d4f4e18915493c6f118ac6ff6a366da96bd38eb4759adc703ed41?apiKey=ce8d1cdd7c3e4ba188d76b4a273904d2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4aa59005d04d4f4e18915493c6f118ac6ff6a366da96bd38eb4759adc703ed41?apiKey=ce8d1cdd7c3e4ba188d76b4a273904d2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4aa59005d04d4f4e18915493c6f118ac6ff6a366da96bd38eb4759adc703ed41?apiKey=ce8d1cdd7c3e4ba188d76b4a273904d2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4aa59005d04d4f4e18915493c6f118ac6ff6a366da96bd38eb4759adc703ed41?apiKey=ce8d1cdd7c3e4ba188d76b4a273904d2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4aa59005d04d4f4e18915493c6f118ac6ff6a366da96bd38eb4759adc703ed41?apiKey=ce8d1cdd7c3e4ba188d76b4a273904d2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4aa59005d04d4f4e18915493c6f118ac6ff6a366da96bd38eb4759adc703ed41?apiKey=ce8d1cdd7c3e4ba188d76b4a273904d2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4aa59005d04d4f4e18915493c6f118ac6ff6a366da96bd38eb4759adc703ed41?apiKey=ce8d1cdd7c3e4ba188d76b4a273904d2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4aa59005d04d4f4e18915493c6f118ac6ff6a366da96bd38eb4759adc703ed41?apiKey=ce8d1cdd7c3e4ba188d76b4a273904d2&"
        className="img"
      />
      <style jsx>{`
        .img {
          aspect-ratio: 0.51;
          object-fit: contain;
          object-position: center;
          width: 100%;
          overflow: hidden;
          max-width: 221px;
        }
      `}</style>
    </>
  );
}