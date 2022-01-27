import React, {FunctionComponent} from 'react';
import './Imprint.css'

interface OwnProps {
}

type Props = OwnProps;

const Imprint: FunctionComponent<Props> = (props) => {

    return (
        <div className="imprint">
            <h1>Impressum</h1>

            <h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
            <p>Janina Kim Marks<br/>
                Ritterstr. 54<br/>
                10969 Berlin</p>

            <h2>Kontakt</h2>
            <p>E-Mail: jakimarks@yahoo.de</p>


            <h2>Redaktionell verantwortlich</h2>
            <p>Janina Kim Marks</p>

            <p>Quelle: <a href="https://www.e-recht24.de">eRecht24</a></p>
        </div>
    );
};

export default Imprint;
