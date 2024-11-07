package co.unicolombo.sgae.infrastucture.config;

import co.unicolombo.sgae.infrastucture.config.filter.JwtAuthenticationFilter;
import co.unicolombo.sgae.infrastucture.config.filter.JwtValidationFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Autowired
    private AuthenticationConfiguration authenticationConfiguration;

    @Bean
    AuthenticationManager authenticationManager() throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    // @Bean
    // public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    // http
    // .authorizeHttpRequests((authz) -> authz
    // .requestMatchers(request ->
    // request.getRequestURI().startsWith("/addCustomer/"))
    // .hasRole("ADMIN")
    // .requestMatchers("/addEmployee").hasRole("ADMIN")
    // .requestMatchers(request -> request.getRequestURI().startsWith("/delete/"))
    // .hasRole("ADMIN")
    // .anyRequest().authenticated()
    // )
    // .exceptionHandling((exceptionHandling) -> exceptionHandling
    // .accessDeniedHandler(new CustomAccessDeniedHandler()))
    // .formLogin((form) -> form
    // .loginPage("/login").permitAll()
    // )
    // .logout((logout) -> logout.permitAll());
    //
    // return http.build();
    // }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        return http.authorizeHttpRequests((authz) -> authz
                .requestMatchers(HttpMethod.GET, "/api/saludo").permitAll()
                .anyRequest().authenticated())
                .addFilter(new JwtAuthenticationFilter(authenticationManager()))
                .addFilter(new JwtValidationFilter(authenticationManager()))
                .csrf(AbstractHttpConfigurer::disable)
                .sessionManagement(management -> management.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .build();
    }
}
