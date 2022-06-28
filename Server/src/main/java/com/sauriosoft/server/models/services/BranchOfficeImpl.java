package com.sauriosoft.server.models.services;

import com.sauriosoft.server.models.entities.BranchOfficeEntity;
import com.sauriosoft.server.models.entities.ContactEntity;
import com.sauriosoft.server.models.exceptions.BranchOfficeException;
import com.sauriosoft.server.models.repositories.BranchOfficeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import javax.transaction.Transactional;
import java.util.List;

@Service
public class BranchOfficeImpl implements IBranchOfficeService {

    @Autowired
    private BranchOfficeRepository branchOfficeRepository;

    @Override
    public List<BranchOfficeEntity> getAll() {
        return branchOfficeRepository.findAll();
    }

    @Override
    public BranchOfficeEntity getById(Long idBranchOffice) {
        return branchOfficeRepository.findById(idBranchOffice).orElseThrow(() -> new BranchOfficeException("Not found Branch_Office with id: ".concat(idBranchOffice.toString())));
    }

    @Override
    public BranchOfficeEntity addBranchOffice(BranchOfficeEntity branchOffice) {
        return branchOfficeRepository.save(branchOffice);
    }

    @Override
    public BranchOfficeEntity updateBranchOffice(BranchOfficeEntity branchOffice, Long idBranchOffice) {
        BranchOfficeEntity branchOfficeToUpdate = getById(idBranchOffice);
        branchOfficeToUpdate.setCity(branchOffice.getCity());
        branchOfficeToUpdate.setName(branchOffice.getName());
        branchOfficeToUpdate.setLatitude(branchOffice.getLatitude());
        branchOfficeToUpdate.setLongitude(branchOffice.getLongitude());
        branchOfficeToUpdate.setPhone(branchOffice.getPhone());
        return branchOfficeRepository.save(branchOfficeToUpdate);
    }

    @Override
    public void deleteBranchOffice(Long idBranchOffice) {
        branchOfficeRepository.deleteById(idBranchOffice);
    }

    @Transactional
    @Override
    public BranchOfficeEntity saveContact(Long idBranchOffice, ContactEntity contact) {
        BranchOfficeEntity branchOffice = getById(idBranchOffice);
        branchOffice.saveContact(contact);
        return branchOffice;
    }

}
