import './StoryLine.css'
import StoryEntry from "./StoryEntry";
import React from "react";

function StoryLine() {
    return (
        <div className="story-line">
            <StoryEntry
                day={"01"}
                title={"Ankunft in Porto"}
                subtitle={"von Berlin Nach Porto, Portugal"}
                description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum risus phasellus posuere pharetra,\n" +
                    "                    elementum sit eget risus. Nibh morbi enim at suspendisse sit nunc tortor eget. Velit habitant\n" +
                    "                    feugiat eu nisl et. Sed vitae, eget ultricies nascetur condimentum urna. Viverra lectus blandit\n" +
                    "                    ullamcorper tortor tortor justo ultrices. Nunc suspendisse."}
            />
            <StoryEntry
                day={"02"}
                orientation={"right"}
                title={"Stadterkundung"}
                subtitle={"Porto, Portugal"}
                description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum risus phasellus posuere pharetra,\n" +
                    "                    elementum sit eget risus. Nibh morbi enim at suspendisse sit nunc tortor eget. Velit habitant\n" +
                    "                    feugiat eu nisl et. Sed vitae, eget ultricies nascetur condimentum urna. Viverra lectus blandit\n" +
                    "                    ullamcorper tortor tortor justo ultrices. Nunc suspendisse."}
            />
        </div>
    );
}

export default StoryLine;
