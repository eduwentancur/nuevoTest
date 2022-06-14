
package com.esoa.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class AnimalController {

    @GetMapping("/animal-form")
    public ModelAndView getForm() {
        ModelAndView mav = new ModelAndView("animal-form");
        
        
        return mav;
    }
    
}
