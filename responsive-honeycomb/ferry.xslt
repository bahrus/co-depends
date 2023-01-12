<?xml version="1.0"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="@*|node()">
        <ul class="honeycomb" lang="es">
            <xsl:apply-templates select="//img-ish"/>
        </ul>
    </xsl:template>

    <xsl:template match="img-ish">
        <li class="honeycomb-cell">
            <xsl:copy-of select="."/>
            <div class="honeycomb-cell__title"><xsl:value-of select="@alt"/></div>
        </li>
    </xsl:template>
</xsl:stylesheet>