
package sistemaparachickenhouse;

public class DiagnosticoSensor {

    public String verificarStatus(int leituraLux) {
        if (leituraLux < 0) {
            return "ERRO CRITICO"; // Não existe luz negativa
        }
        return "OK";
    }
}
