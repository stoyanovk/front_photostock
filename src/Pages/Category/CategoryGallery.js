import React, { useState } from "react";
import { SectionWrapper } from "./style";
import LightBox from "../../Components/LightBox";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";

export default function CategoryGallery({ category: { images } }) {
    const [elInd, setElInd] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = (ind) => () => {
        setElInd(ind);
        setIsOpen(true)
    }
  return (
    <SectionWrapper>
          <LightBox images={images} isOpen={isOpen} elInd={elInd} setIsOpen={setIsOpen} setElInd={setElInd}/>
      <GridList cellHeight={300} cols={3}>
        {images.map((tile, i) => (
            <GridListTile key={tile.id} onClick={handleClick(i)} >
            <img src={tile.image} alt={tile.name} />
            <GridListTileBar
              title={<span>{tile.name}</span>}
              subtitle={<span>{tile.desc}</span>}
            />
          </GridListTile>
        ))}
      </GridList>
    </SectionWrapper>
  );
}
