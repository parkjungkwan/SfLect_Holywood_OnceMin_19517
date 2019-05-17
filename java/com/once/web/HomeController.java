package com.once.web;

import java.util.Locale;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.SessionAttributes;


@Controller
@SessionAttributes({"ctx","css","js","img","csv"})
public class HomeController {
private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	@Autowired HttpSession session;
	@Autowired HttpServletRequest request;
	@RequestMapping("/")
	public String home(Locale locale, Model model) {
		String ctx = request.getContextPath();
		session.setAttribute("ctx", ctx);
		session.setAttribute("css", ctx + "/resources/css/");
		session.setAttribute("js", ctx + "/resources/js/");
		session.setAttribute("img", ctx + "/resources/img/");
		session.setAttribute("csv", ctx + "/resources/csv/");
		return "Index";
	}
	@RequestMapping("/move/{pate}")
	public String ksaMain(@PathVariable String path) {
		return path;
	}
	
}
