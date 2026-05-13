import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Props: task (objeto), onToggle (función), onDelete (función)
export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <View style={styles.container}>

      {/* Botón de completar — llama onToggle con el id */}
      <TouchableOpacity
        style={[styles.checkbox, task.done && styles.checkboxDone]}
        onPress={() => onToggle(task.id)}
      >
        {task.done && <Text style={styles.checkmark}>✓</Text>}
      </TouchableOpacity>

      {/* Texto con estilo condicional si está completada */}
      <Text style={[styles.text, task.done && styles.textDone]}>
        {task.text}
      </Text>

      {/* Botón de eliminar */}
      <TouchableOpacity onPress={() => onDelete(task.id)}>
        <Text style={styles.deleteBtn}>✕</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',    // elementos en fila horizontal
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 14,
    marginBottom: 8,
    borderWidth: 0.5,
    borderColor: '#E0DED8',
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 11,        // círculo perfecto
    borderWidth: 1.5,
    borderColor: '#B4B2A9',
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxDone: {
    backgroundColor: '#3B6D11',
    borderColor: '#3B6D11',
  },
  checkmark: { color: '#fff', fontSize: 12, fontWeight: '600' },
  text: { flex: 1, fontSize: 15, color: '#2C2C2A' },
  textDone: {
    textDecorationLine: 'line-through',
    color: '#B4B2A9',
  },
  deleteBtn: { fontSize: 16, color: '#B4B2A9', paddingLeft: 8 },
});