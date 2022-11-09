import React, {useState} from 'react';
import {Button, Modal, Center, NativeBaseProvider} from 'native-base';
import {Dimensions} from 'react-native';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export const Example = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Button onPress={() => setShowModal(true)}>Button</Button>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content
          height={windowHeight}
          maxHeight={windowHeight}
          width={windowWidth}
          maxWidth={windowWidth}>
          <Modal.CloseButton />
          <Modal.Header>Modal Title</Modal.Header>
          <Modal.Body>full screen modal</Modal.Body>
          <Modal.Footer>
            <Button.Group variant="ghost" space={2}>
              <Button>LEARN MORE</Button>
              <Button
                onPress={() => {
                  setShowModal(false);
                }}>
                ACCEPT
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
};

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <Example />
      </Center>
    </NativeBaseProvider>
  );
};
