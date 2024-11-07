package co.unicolombo.sgae.business.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import co.unicolombo.sgae.business.model.User;

public interface UserRepository extends JpaRepository<User, Integer> {
    Optional<User> findByUsername(String username);
}
