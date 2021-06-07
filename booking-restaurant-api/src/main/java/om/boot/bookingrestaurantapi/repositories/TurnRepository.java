package om.boot.bookingrestaurantapi.repositories;

import java.util.Optional;

import om.boot.bookingrestaurantapi.entities.Turn;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface TurnRepository extends JpaRepository<Turn, Long> {

    Optional<Turn> findById(Long id);

}
