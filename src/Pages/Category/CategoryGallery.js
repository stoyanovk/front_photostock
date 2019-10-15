import React from "react";
import { SectionWrapper } from "./style";
import { url } from "../../utils";
import { Link } from "react-router-dom";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import { GridImg } from "./style";
export default function CategoryGallery({ category: { images } }) {
  console.log('render category gallery');
  return images ? (
    <SectionWrapper>
      <GridList cellHeight={300} cols={3}>
        {images.map(({ alt, imageUrl, title, _id, description }) => {
          const desc = description.substr(0, 40);
          return (
            <GridListTile key={_id}>
              <Link to={`/photo/${_id}`}>
                <GridImg src={`${url}${imageUrl}`} alt={alt} />
                <GridListTileBar
                  title={<span>{title}</span>}
                  subtitle={<span>{`${desc}...`}</span>}
                />
              </Link>
            </GridListTile>
          );
        })}
      </GridList>
    </SectionWrapper>
  ) : (
    <h2> Загрузка...</h2>
  );
}

