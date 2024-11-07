package co.unicolombo.sgae.business.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import co.unicolombo.sgae.business.model.Role;

public interface RoleRepository extends JpaRepository<Role, Integer> {

    Optional<Role> findByName(String name);
}
