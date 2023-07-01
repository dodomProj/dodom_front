import { useRef } from 'react';
import { saveAs } from 'file-saver';
import domtoimage from 'dom-to-image';

const useSaveImg = (fileName: string) => {
  const imgRef = useRef<HTMLDivElement>(null);

  const buttonFilterOnSave = (card: any) => {
    return card.tagName !== 'BUTTON';
  };
  const saveImg = () => {
    const card = imgRef?.current;
    if (card) {
      domtoimage.toBlob(card, { filter: buttonFilterOnSave }).then((blob) => {
        saveAs(blob, fileName);
      });
    }
  };

  return { imgRef, saveImg };
};

export default useSaveImg;
