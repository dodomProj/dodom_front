import { useRef } from 'react';
import { saveAs } from 'file-saver';
import domtoimage from 'dom-to-image';

const useSaveImg = (fileName: string) => {
  const imgRef = useRef<HTMLDivElement>(null);

  const saveImg = () => {
    const card = imgRef?.current;
    if (card) {
      domtoimage
        .toBlob(card, { filter: () => card.tagName !== 'BUTTON' })
        .then((blob) => {
          saveAs(blob, fileName);
        });
    }
  };

  return { imgRef, saveImg };
};

export default useSaveImg;
