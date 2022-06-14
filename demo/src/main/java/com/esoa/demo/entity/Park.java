package com.esoa.demo.entity;

import javax.persistence.*;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.SQLDelete;

@Entity
@Table(name = "park",indexes = {@Index(name = "idx_name", columnList = "park_name")})
@SQLDelete(sql = "UPDATE park SET deleted = true WHERE id = ?")
@Getter
@Setter
@NoArgsConstructor
public class Park {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(name = "park_image")
    private String image;
    @Column(name = "park_name", nullable = false)
    private String name;
    @Column(name = "park_location", nullable = false)
    private String location;
    @Column(name = "park_position", nullable = false)
    private String position;
    @Lob
    @Column(name = "park_description")
    private String description;
    @Column(name = "park_link", nullable = false)
    private String link;
    @Column(name = "park_deleted", nullable = false)
    private boolean deleted;
    
    
}
