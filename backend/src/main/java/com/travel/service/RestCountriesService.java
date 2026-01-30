package com.travel.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.travel.dto.DestinationDTO;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;

@Service
public class RestCountriesService {

    @Value("${rest-countries.api.url}")
    private String apiUrl;

    private final RestTemplate restTemplate = new RestTemplate();

    public List<DestinationDTO> fetchCountries() {
        String url = apiUrl + "/all?fields=name,capital,region,population,currencies,flags";
        JsonNode countries = restTemplate.getForObject(url, JsonNode.class);

        List<DestinationDTO> result = new ArrayList<>();

        if (countries != null) {
            for (JsonNode node : countries) {

                DestinationDTO dto = new DestinationDTO();

                dto.setCountry(node.path("name").path("common").asText());

                dto.setCapital(node.path("capital").isArray() && node.path("capital").size() > 0 ?
                        node.path("capital").get(0).asText() : "");
                dto.setRegion(node.path("region").asText());

                dto.setPopulation(node.path("population").asLong());

                JsonNode currenciesNode = node.path("currencies");
                if (currenciesNode.fieldNames().hasNext()) {
                    String key = currenciesNode.fieldNames().next();
                    dto.setCurrency(currenciesNode.path(key).path("name").asText());
                }
                dto.setFlagUrl(node.path("flags").path("png").asText());
                result.add(dto);
            }
        }
        return result;
    }


}
