package co.unicolombo.sgae.business.services;

import java.util.List;
import java.util.Optional;

import co.unicolombo.sgae.business.model.User;

public interface IUserService {
    List<User> findAll();

    Optional<User> findByUsername(String username);

    User save(User user);
}
