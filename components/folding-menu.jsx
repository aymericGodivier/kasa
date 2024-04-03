import { useState } from 'react';
export default function FoldingMenu({menuTitle, content}){

    const [expanded, setExpanded] = useState(false);

    const toggleMenu = () => {
      setExpanded(!expanded);
    };

    // Fonction pour traiter le contenu en fonction de son type
    const processContent = (content) => {
        // Si le contenu est une chaîne de caractères, retournez-la telle quelle
        if (typeof content === 'string') {
            return content;
        }
        // Si le contenu est un tableau, créez une chaîne de caractères à partir de ses éléments
        if (Array.isArray(content)) {
            return content.map((item, index) => (
                <span key={index}>{item}<br /></span>
            ));
        }
        // Si le contenu n'est ni une chaîne de caractères ni un tableau, retournez une chaîne vide
        return '';
    };

    return(
        <div className={`folding-menu ${expanded ? 'expanded' : ''}`}>
            <div className="menu-header">
                <span>{menuTitle}</span>
                <img src="../../src/assets/Chevron.png" onClick={toggleMenu}></img>
            </div>            
            <div className="menu-content">
                <p>
                    {processContent(content)}
                </p>
            </div>
        </div>
    )
}