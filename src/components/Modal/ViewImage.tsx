import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered size="4xl"
    >
      <ModalOverlay/>
      <ModalContent
        marginX="auto"
        width="auto"
        height="auto"
        maxWidth={['300px', '500px', '900px']}
        maxHeight={['350px', '450px', '600px']}
      >
        <ModalBody
          padding="0"
        >
          <Image
            src={imgUrl}
            maxWidth={['300px', '500px', '900px']}
            maxHeight={['350px', '450px', '600px']}
          />

        </ModalBody>
        <ModalFooter
          bg="pGray.800"
          height="2rem"
          paddingY="20px"
          borderBottomEndRadius="5px"
        >
          <Link
            href={imgUrl}
            isExternal
            fontSize="1rem"
            marginRight="auto"
          >
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
    );
}
