import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function AddTaskInput({ onAdd }) {
  const [text, setText] = useState(''); // estado local del campo

  const handleAdd = () => {
    onAdd(text);    // llama la función del padre
    setText('');    // limpia el input después de agregar
  };

  return (
    <View style={styles.row}>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}        // actualiza el estado en cada tecla
        placeholder="Nueva tarea..."
        placeholderTextColor="#B4B2A9"
        onSubmitEditing={handleAdd}   // presionar Enter en el teclado
        returnKeyType="done"          // cambia el botón del teclado a "listo"
      />
      <TouchableOpacity style={styles.btn} onPress={handleAdd}>
        <Text style={styles.btnText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: 0.5,
    borderColor: '#E0DED8',
  },
  input: {
    flex: 1,
    height: 44,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 14,
    fontSize: 15,
    borderWidth: 0.5,
    borderColor: '#D3D1C7',
    color: '#2C2C2A',
  },
  btn: {
    width: 44,
    height: 44,
    borderRadius: 10,
    backgroundColor: '#534AB7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: { color: '#fff', fontSize: 24, lineHeight: 28 },
});