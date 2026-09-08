import { useRef } from "react";

/*
==========================================
VideoThumb

Componente compartilhado usado tanto na
galeria do admin quanto na galeria do
usuário, para garantir que a capa (thumbnail)
do vídeo seja sempre a mesma nas duas telas.

Ele força o vídeo a posicionar o frame em
um instante inicial assim que os metadados
carregam, evitando que o navegador decida
sozinho mostrar tela preta ou frame aleatório.
==========================================
*/

export default function VideoThumb({ src, ...props }) {

  const videoRef = useRef(null);

  function handleLoadedMetadata() {

    if (videoRef.current) {

      videoRef.current.currentTime = 0.1;

    }

  }

  return (

    <video
      ref={videoRef}
      src={src}
      muted
      playsInline
      preload="metadata"
      onLoadedMetadata={handleLoadedMetadata}
      {...props}
    />

  );

}