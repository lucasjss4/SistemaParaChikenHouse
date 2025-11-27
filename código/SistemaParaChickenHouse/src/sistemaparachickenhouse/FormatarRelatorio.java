package sistemaparachickenhouse;

public class FormatarRelatorio {

    public String gerarLinhaDeRelatorio(String data, int racaoGasta) {

        String linha = "LOG: " + data + " | " + "CONSUMO: " + racaoGasta;

        return linha;

    }
}
