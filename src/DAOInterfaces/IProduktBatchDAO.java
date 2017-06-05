package DAOInterfaces;

import java.util.List;

import Connector.DALException;
import DTO.ProduktBatchDTO;

public interface IProduktBatchDAO 
{
	ProduktBatchDTO getProduktBatch(int pbId) throws DALException, Exception;
	List<ProduktBatchDTO> getProduktBatchList() throws DALException, Exception;
	void createProduktBatch(ProduktBatchDTO produktbatch) throws DALException, Exception;
	void updateProduktBatch(ProduktBatchDTO produktbatch) throws DALException, Exception;
}
